from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Master"),
			"items": [
				{
					"type": "doctype",
					"name": "Master Member",
				},
                {
                    "type": "doctype",
					"name": "Master Item",
                }
            ]
        },
		{
			"label": _("Transaksi"),
			"items": [
				{
					"type": "doctype",
					"name": "Transaksi",
				}
			]
		}
    ]