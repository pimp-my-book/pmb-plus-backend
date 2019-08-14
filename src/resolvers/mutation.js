//All the apps mutations are here
import db from '../../libs/db'

//Add Vendor
export const addVendor = async ({input:args}, context) =>{
try{
 
    console.log(process.env.NODE_ENV)
    console.log(db)
   const addVendorInput = {
    vendorName: args.vendorName,
    vendorDescription:args.vendorDescription,
    vendorWebsite: args.vendorWebsite,
    vendorEmail: args.vendorEmail,
    vendorPhone: args.vendorPhone,
    vendorAddress: args.vendorAddress,
   }

   let newVendor = await db.query(`INSERT INTO vendor (vendor_name,vendor_description,vendor_website, vendor_address,vendor_email,vendor_phone_number,user_id,vendor_type_id ) VALUES(?,?,?,?,?,?,?,?)`,
[
  addVendorInput.vendorName,
  addVendorInput.vendorDescription,
  addVendorInput.vendorWebsite,
  addVendorInput.vendorAddress,
  addVendorInput.vendorEmail,
  addVendorInput.vendorPhone,
  "94c3ae75-5a32-4c44-bc17-e80cbfc006a7",
  2
])
console.log(newVendor)
await db.end()

return {
    vendorName: args.vendorName,
    vendorDescription:args.vendorDescription,
    vendorWebsite: args.vendorWebsite,
    vendorEmail: args.vendorEmail,
    vendorPhone: args.vendorPhone,
    vendorAddreess: argsvendorAddreess,
}
} catch(e){
   return e
}
}