//All the apps mutations are here
import db from '../../libs/db'

//Add Vendor
export const addVendor = async ({input:args}, context) =>{
try{
   const addVendorInput = {
    vendorName: args.vendorName,
    vendorDescription:args.vendorDescription,
    vendorWebsite: args.vendorWebsite,
    vendorEmail: args.vendorEmail,
    vendorPhone: args.vendorPhone,
    vendorAddreess: argsvendorAddreess,
   }

   let newVendor = await db.query(`INSERT INTO vendor (vendor_name,vendor_description,vendor_website, vendor_address,vendor_email,vendor_phone_number,user_id,vendor_type_id ) VALUES(?,?,?,?,?,?,?,?,?)`,
[
    
]
)
} catch(e){

}
}