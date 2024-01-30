frappe.ui.form.on('Supplier', {
    validate:function(frm){
        if(frm.doc.custom_vendor_reg_number){
            console.log("kkk")
            frm.set_df_property('custom_vendor_reg_number', 'read_only', 1)
        }
    },
    refresh:function(frm){
        if(frm.doc.custom_vendor_reg_number){
            console.log('jj')
            frm.set_df_property('custom_vendor_reg_number', 'read_only', 1)
        }
    }
})