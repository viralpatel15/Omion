import frappe
from erpnext.accounts.utils import get_fiscal_year, flt


def get_fiscal(date):
	fy = get_fiscal_year(date)[0]
	fiscal = frappe.db.get_value("Fiscal Year", fy, 'custom_fiscal')
	return fiscal if fiscal else fy.split("-")[0][2:] + fy.split("-")[1][2:]

def before_naming(self, method):
	if not self.get('amended_from') and not self.get('name'):
		date = self.get("transaction_date") or self.get("posting_date") or  self.get("manufacturing_date") or self.get('date') or getdate()
		fiscal = get_fiscal(date)
		self.custom_fiscal = fiscal