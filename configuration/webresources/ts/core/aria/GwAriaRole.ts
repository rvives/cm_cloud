export type GwAriaWidgetRole =
    "alert" | //"A message with important, and usually time-sensitive, information. See related alertdialog and status.")
    "alertdialogue" | //"A type of dialog that contains an alert message, where initial focus goes to an element within the dialog. See related alert and dialog.")
    "button" | //"An input that allows for user-triggered actions when clicked or pressed. See related link.")
    "checkbox" | //"A checkable input that has three possible values: true, false, or mixed")
    "dialog" | //"A dialog is an application window that is designed to interrupt the current processing of an application in order to prompt the user to enter information or require a response. See related alertdialog.")
    "gridcell" | //"A cell in a grid or treegrid.")
    "link" | //"An interactive reference to an internal or external resource that, when activated, causes the user agent to navigate to that resource. See related button.")
    "log" | //"A type of live region where new information is added in meaningful order and old information may disappear. See related marquee.")
    "marquee" | //"A type of live region where non-essential information changes frequently. See related log.")
    "menuitem" | //"An option in a set of choices contained by a menu or menubar.")
    "menuitemcheckbox" | //"A menuitem with a checkable state whose possible values are true, false, or mixed.")
    "menuitemradio" | //"A checkable menuitem in a set of elements with role menuitemradio, only one of which can be checked at a time.")
    "option" | //"A selectable item in a select list.")
    "progressbar" | //"An element that displays the progress status for tasks that take a long time.")
    "radio" | //"A checkable input in a group of radio roles, only one of which can be checked at a time.")
    "scrollbar" | //"A graphical object that controls the scrolling of content within a viewing area, regardless of whether the content is fully displayed within the viewing area.")
    "slider" | //"A user input where the user selects a value from within a given range.")
    "spinbutton" | //"A form of range that expects the user to select from among discrete choices.")
    "status" | //"A container whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar. See related alert.")
    "tab" | //"A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.")
    "tabpanel" | //"A container for the resources associated with a tab, where each tab is contained in a tablist.")
    "textbox" | //"Input that allows free-form text as its value.")
    "timer" | //"A type of live region containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point.")
    "tooltip" | //"A contextual popup that displays a description for an element.")
    "treeitem"; //"An option item of a tree. This is an element within a tree that may be expanded or collapsed if it contains a sub-level group of treeitem elements.")

export type GwAriaContainerRole =
    "combobox" | // A presentation of a select; usually similar to a textbox where users can type ahead to select an option, or type to enter arbitrary text as a new item in the list. See related listbox.
    "grid" | // A grid is an interactive control which contains cells of tabular data arranged in rows and columns, like a table.
    "listbox" | // A widget that allows the user to select one or more items from a list of choices. See related combobox and list.
    "menu" | // A type of widget that offers a list of choices to the user.
    "menubar" | // A presentation of menu that usually remains visible and is usually presented horizontally.
    "radiogroup" | // A group of radio buttons.
    "tablist" | // A list of tab elements, which are references to tabpanel elements.
    "tree" | // A type of list that may contain sub-level nested groups that can be collapsed and expanded.
    "treegrid"; // A grid whose rows can be expanded and collapsed in the same manner as for a tree.

export type GwAriaDocumentStructureRole =
    "article" | // A section of a page that consists of a composition that forms an independent part of a document, page, or site.
    "columnheader" | // A cell containing header information for a column.
    "definition" | // A definition of a term or concept.
    "directory" | // A list of references to members of a group, such as a static table of contents.
    "document" | // A region containing related information that is declared as document content, as opposed to a web application.
    "group" | // A set of user interface objects which are not intended to be included in a page summary or table of contents by assistive technologies.
    "heading" | // A heading for a section of the page.
    "img" | // A container for a collection of elements that form an image.
    "list" | // A group of non-interactive list items. See related listbox.
    "listitem" | // A single item in a list or directory.
    "math" | // Content that represents a mathematical expression.
    "note" | // A section whose content is parenthetic or ancillary to the main content of the resource.
    "presentation" | // An element whose implicit native role semantics will not be mapped to the accessibility API.
    "region" | // A large perceivable section of a web page or document, that is important enough to be included in a page summary or table of contents, for example, an area of the page containing live sporting event statistics.
    "row" | // A row of cells in a grid.
    "rowgroup" | // A group containing one or more row elements in a grid.
    "rowheader" | // A cell containing header information for a row in a grid.
    "separator" | // A divider that separates and distinguishes sections of content or groups of menuitems.
    "toolbar"; // A collection of commonly used function buttons or controls represented in compact visual form.

export type GwAriaLandmarkRole =
    "application" | // A region declared as a web application, as opposed to a web document
    "banner" | // A region that contains mostly site-oriented content, rather than page-specific content.
    "complementary" | // A supporting section of the document, designed to be complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content.
    "contentinfo" | // A large perceivable region that contains information about the parent document.
    "form" | // A landmark region that contains a collection of items and objects that, as a whole, combine to create a form. See related search.
    "main" | // The main content of a document.
    "navigation" | // A collection of navigational elements (usually links) for navigating the document or related documents.
    "search"; // A landmark region that contains a collection of items and objects that, as a whole, combine to create a search facility. See related form.

export type GwAriaRole = GwAriaWidgetRole | GwAriaContainerRole | GwAriaDocumentStructureRole | GwAriaLandmarkRole;
