# -*- coding: utf-8 -*-
# Copyright (c) 2019, MDB and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class MasterMember(Document):
	pass

	# # Merubah saldo yang ada di Master member, setelah submit data
	# def change_saldo_member(self):
	# 	if self.saldo_member:

	# 		for i in self.saldo_member:
	# 			item = frappe.get_doc('Top Up Saldo', i.saldo_member)

	# 			if item.saldo_member != 0:
	# 				item.saldo_member = item.saldo_member + i.saldo_member

	# 			item.save()