# -*- coding: utf-8 -*-
# Copyright (c) 2019, MDB and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class TopUpSaldo(Document):
	pass



	def on_submit(self):
		self.on_approve()





	def on_approve(self):
		member = frappe.get_doc("Master Member",self.id_member)
		member.saldo_member = (self.saldo_member + self.tambah_saldo)
		member.save()

