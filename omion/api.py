import frappe
from frappe.model.naming import make_autoname

def create_vender_series(self , method):
    if not self.custom_vendor_reg_number:
        self.custom_vendor_reg_number = make_autoname('V-OM-.###' , "Supplier")