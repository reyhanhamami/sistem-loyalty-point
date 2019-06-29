
## Loyalty Point

Loyalty Point

#### License

MIT
=======
# Loyalty Point
Simple Loyalty Point System With ERPNext

# Sync Point App to Your Project
1. New Project
    * Make new project **Optional: name project loyalty-point**: `bench init loyalty-point --frappe-path https://training@dev.azure.com/devmis004/frappe-training/_git/frappe-training`
    * Open folder: `cd loyalty-point`
    * Bench new site **Optional: loyalty.point.local**: `bench new-site loyalty.point.local`
    * Get erpnext app: `bench get-app erpnext https://training@dev.azure.com/devmis004/erpnext-training/_git/erpnext-training`
    * Install erpnext app: `bench --site loyalty.point.local install-app erpnext`
    * Check your project: `bench start`
    * *Default setting like Note*
    * Active developer mode on path **/sites/sites_config.json**, add: `"developer_mode": 1,` after db_password
2. Existing Project
    * Open your existing project 
    * Get **loyalty-point app**: `bench get-app [appname] https://github.com/EGEPEE/mispoint.git`
    * Install point app: `bench install-app [appname]`
    * Run server: `bench start`
    * Open new terminal on project path
    * Migrate app: `bench migrate`


