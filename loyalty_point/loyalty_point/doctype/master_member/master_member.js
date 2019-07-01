// Copyright (c) 2019, MDB and contributors
// For license information, please see license.txt

frappe.ui.form.on('Master Member', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on("Top Up Saldo", "saldo_member", function(frm, cdt, cdn) {

	var top_up_saldos = frm.doc.saldo_member;
	var total = 0
	for(var i in top_up_saldos) {
	 total = total + top_up_saldos[i].saldo_member
	 }
 
	 frm.set_value("saldo_member",total)
 
 });
