// Copyright (c) 2019, MDB and contributors
// For license information, please see license.txt

frappe.ui.form.on('Transaksi', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on("Transaksi Line", {
	jumlah_item: function(frm, cdt, cdn) {
		var row = locals[cdt][cdn]
		// Mengambil data pada master item
		frappe.call({
			method: 'frappe.client.get',
			args: {
				doctype: 'Master Item',
				name: row.item
			},
			callback: function(data) {
				if (data) {
					// menghitung total harga dan point
					var harga_akhir = data.message.harga_item * row.jumlah_item

					frappe.model.set_value(row.doctype, row.name, 'harga_item', harga_akhir)

					// // alert jika duit kurang
					// if (row.saldo_member >= data.message.saldo_member) {
					// 	msgprint('Uang tidak mencukupi.')
					// 	frappe.model.set_value(row.doctype, row.name, 'saldo_member', data.message.saldo_member)
					// }
				}
				// refresh_field('saldo_member')
			}
		})
	},
	// menambah total transaksi sesuai pada harga jumlah item yang ditambah
	harga_item: function(frm, cdt, cdn) {
		var row = locals[cdt][cdn]
		
		var total_transaksi = 0
		// var total_point = 0
		
		frm.doc.item.forEach(function(row) { 
			total_transaksi += row.harga_item
			// total_point += row.point_peroleh
		})

		frm.set_value('total_transaksi', total_transaksi)
		refresh_field('total_transaksi')
	},
	
	// mengurangi total transaksi sesuai pada harga jumlah item yang dihapus
	item_remove:function(frm, cdt, cdn){
		var row = locals[cdt][cdn]
		
		var total_transaksi = 0
		
		frm.doc.item.forEach(function(row) { 
			total_transaksi += row.harga_item
		
		})

		frm.set_value('total_transaksi', total_transaksi)
		refresh_field('total_transaksi')
	}
});