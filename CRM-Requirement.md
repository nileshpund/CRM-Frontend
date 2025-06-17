Email ->userName
remove forgot passwrd

------------------------------------------------------------

DASHBOARD
cards size reduce
Total Properties Listed: On-click action should redirect to the Properties Details Page.
closed deals -> closed leads
penading to be navigated to pending tab in LEADS page

create card liks UI show counts of below for sample data
Total, Untouched, Unassigned, No Reminder


------------------------------------------------------------

NAVIGATION
Dashboard
Leads
Sample Data
Properties
Task
Site Visit
Analytics
User Management

------------------------------------------------------------

LEADS
Add page Title: add search filter infront on name in right corner
Updated Tabs
New, Hot, Untouched, Booked, Re-visit Scheduled, Final Negotiation

ceate new table closed
from dashboard need to navigate here

upcoming tab -> Hot

CARD Structure
#23D
john doe                    assign Sales exe name
property location           time stamp
Description
Icons (remove email)

add + icon on click need to show popup showing two options:
BULK UPLOAD and MANUL ENTRY (form give in vscode)

------------------------------------------------------------

ADD NEW TAB SAMPLE DATA
Add page Title: add search filter infront on name in right corner
UI same as leads page
on click of call ->when back on app open popup to update customer status
on update need to move that section to that tab
add + icon on click need to show popup showing two options:
BULK UPLOAD and MANUL ENTRY (form give in vscode)


PROPERTIES
need share icon in right corner (in details page too)


ANALYTICS
add charts

SITE VISIT
====




NEW SAMPLE DATA UI FIELDS

@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String firstVisit;  // e.g., "Site Visit", "Revisit"
    private LocalDate siteVisitDate;
    private String contactName;
    private String contact;
    private String email;
    private String nationality;
    private String ageGroup;
    private String ethnicity;
    private String employmentType;
    private String companyName;
    private String officeLocality;
    private String pincode;
    private Strin
private String industry;
    private String address1;
    private String locality;
    private String unitType;
    private String budget;
    private String areaSqFeet;
    private String constructionStatus;
    private String seekingFor;