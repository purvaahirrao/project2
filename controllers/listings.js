 const Listing=require("../models/listing");
  
 async function geocode(query) {
  const url = `https://us1.locationiq.com/v1/search?key=pk.e09e7a7ff0a3ef60676c3faa38acfe25&q=${encodeURIComponent(query)}&format=json`;
  const res = await fetch(url);
  const data = await res.json();
  
  if (Array.isArray(data) && data.length > 0) {
    const lat = parseFloat(data[0].lat);
    const lon = parseFloat(data[0].lon);

    // Return GeoJSON Point format
    return {
      type: "Point",
      coordinates: [lon, lat] // GeoJSON is [longitude, latitude]
    };
  } else {
    return null;
  }
};

 module.exports.index=async (req,res)=>{
   const allListings= await Listing.find({});
   res.render("listings/index.ejs",{allListings});
};

module.exports.renderNewForm=(req,res)=>{
      res.render("listings/new.ejs");

 };

 module.exports.showListing=async(req,res)=>{
let {id}=req.params;
 const listing=await Listing.findById(id)
 .populate({path:"reviews",
   populate:{path:"author"},
})
 .populate("owner");
if(!listing)
{
   req.flash("error","Listing you requested for does not exist");
   res.redirect("/listings");
}else{

 res.render("listings/show.ejs",{listing});
}
console.log(listing);

};

module.exports.createListing=async (req,res)=>{

  const geometry=await geocode(req.body.listing.location);
  
  const url= req.file.path;
  let filename=req.file.filename;

const newListing=new Listing(req.body.listing);
newListing.owner=req.user._id;
newListing.image={url,filename};
 if (geometry){
newListing.geometry=geometry;
 }
 else 
  {
   req.flash("error","Location not found!!");
  };
let savedListing=await newListing.save();
console.log(savedListing);
req.flash("success","New Listing Created!");
res.redirect("/listings");
};

module.exports.renderEditForm=async (req,res)=>{
let {id}=req.params;
const listing= await Listing.findById(id);
if(!listing)
{
   req.flash("error","Listing you requested for does not exist");
  return res.redirect("/listings");
}
let originalImageUrl=listing.image.url;
originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
res.render("listings/edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing=async (req,res)=>{
  
let { id } = req.params;

  // Find the listing first
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  // Update other fields
  listing.set({ ...req.body.listing });

  // If the location was changed, update the geometry
  if (req.body.listing.location) {
    const geometry = await geocode(req.body.listing.location);
    if (geometry) {
      listing.geometry = geometry;
    } else {
      req.flash("error", "Location not found! Coordinates not updated.");
    }
  }

  // Update image if a new file was uploaded
  if (req.file) {
    const url = req.file.path;
    const filename = req.file.filename;
    listing.image = { url, filename };
  }

  await listing.save();
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async (req,res)=>{
    let {id}=req.params; 
let deletedListing=await Listing.findByIdAndDelete(id);
console.log(deletedListing);
req.flash("success","Listing Deleted!");
res.redirect("/listings");
};