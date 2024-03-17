frappe.ready(function() {
    frappe.web_form.set_value('custom_user', frappe.session.user)
	var customUserField = document.querySelector('div[data-fieldname="custom_user"]');
    console.log(customUserField)
    
})