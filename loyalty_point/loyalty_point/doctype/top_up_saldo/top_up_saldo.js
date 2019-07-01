// Copyright (c) 2019, MDB and contributors
// For license information, please see license.txt

frappe.ui.form.on('Top Up Saldo', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on('Top Up Saldo', 'tambah_saldo', function (frm) {

	// if (frm.doc.tanggal_pinjam < frappe.datetime.get_today()) 
	var saldo = eval (frm.doc.saldo_member);
	var tambah = eval(frm.doc.tambah_saldo);
	var total = saldo + tambah ;
	console.log(total);
	frm.set_value('saldo_member', total);
	


});

// // additional validation on dates 
// frappe.ui.form.on('Top Up Saldo', 'refresh', function(frm) {
//    // if (frm.doc.tanggal_pinjam < frappe.datetime.get_today()) 
// 	var saldo = eval (frm.doc.saldo_member);
// 	var tambah = eval(frm.doc.tambah_saldo);
// 	var total = saldo + tambah ;
// 	console.log(total);
// 	frm.set_value('saldo_member', saldo);
// });