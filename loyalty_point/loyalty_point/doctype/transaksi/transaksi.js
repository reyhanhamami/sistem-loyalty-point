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
					// var jumlah_tukar = data.message.best_point * row.jumlah_item
					var harga_akhir = data.message.harga_item * row.jumlah_item
					// var point_yang_tukar = 0.001 * harga_akhir

					// frappe.model.set_value(row.doctype, row.name, 'point_tukar', jumlah_tukar)
					frappe.model.set_value(row.doctype, row.name, 'harga_item', harga_akhir)
					// frappe.model.set_value(row.doctype, row.name, 'point_peroleh', point_yang_tukar)

					// // alert jika stok kurang
					// if (row.jumlah_item >= data.message.jumlah_item) {
					// 	msgprint('Stok tidak mencukupi.')
					// 	frappe.model.set_value(row.doctype, row.name, 'jumlah_item', data.message.jumlah_item)
					// }
				}
				refresh_field('jumlah_item')
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
	
		// console.log(total_transaksi)
		frm.set_value('total_transaksi', total_transaksi)
		// frm.set_value('calculate', total_point)

		refresh_field('total_transaksi')
		// refresh_field('calculate')
	},
	// mengurangi total transaksi sesuai pada harga jumlah item yang dihapus
	item_remove:function(frm, cdt, cdn){
		var row = locals[cdt][cdn]
		
		var total_transaksi = 0
		// var total_point = 0
		
		frm.doc.item.forEach(function(row) { 
			total_transaksi += row.harga_item
			// total_point += row.point_peroleh
		})
		// console.log(total_transaksi)
		frm.set_value('total_transaksi', total_transaksi)
		// // frm.set_value('calculate', total_point)
		refresh_field('total_transaksi')
		// // refresh_field('calculate')
	}
});