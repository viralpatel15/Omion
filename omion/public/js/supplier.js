frappe.ui.form.on('Supplier', {
    validate:function(frm){
        if(frm.doc.custom_vendor_reg_number){
            frm.set_df_property('custom_vendor_reg_number', 'reqd', 1)
        }
    },
    refresh:function(frm){
        if(frm.doc.custom_vendor_reg_number){
            frm.set_df_property('custom_vendor_reg_number', 'reqd', 1)
        }
    }
})