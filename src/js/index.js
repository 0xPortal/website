function changeTab(newTab) {

    // remove 'selected' aria attribute from all tabs
    document.getElementById("tablist-home").ariaSelected = false
    document.getElementById("tablist-projects").ariaSelected = false
    document.getElementById("tablist-blog").ariaSelected = false
    document.getElementById("tablist-contact").ariaSelected = false
    document.getElementById("tablist-about").ariaSelected = false

    // add 'selected' aria attribute to clicked tab
    const newTabID = "tablist-" + newTab
    const newTabElement = document.getElementById(newTabID)

    newTabElement.ariaSelected = true

    // add 'hidden' class to all bodies
    document.getElementById("content-home").classList.add("hidden")
    document.getElementById("content-projects").classList.add("hidden")
    document.getElementById("content-blog").classList.add("hidden")
    document.getElementById("content-contact").classList.add("hidden")
    document.getElementById("content-about").classList.add("hidden")

    // remoev 'hidden' class to selected body
    const newContentID = "content-" + newTab
    const newContentElement = document.getElementById(newContentID)

    newContentElement.classList.remove("hidden")

    // update title
    const newTitle = newTab.charAt(0).toUpperCase() + newTab.slice(1) + " | 0xPortal"
    
    document.getElementById("title-bar").innerHTML = newTitle
}