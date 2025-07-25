
function expand(category) {
    switch (category) {
        case 'experiences':
            handleExpansion('experiences', '2fr 1fr 1fr 1fr');
            break;
        case 'education':
            handleExpansion('education', '1fr 2fr 1fr 1fr');
            break;
        case 'skills':
            handleExpansion('skills', '1fr 1fr 2fr 1fr');
            break;
        case 'volunteer':
            handleExpansion('volunteer', '1fr 1fr 1fr 2fr');
            break;
        default:
            break;
    }

}

function shrink(category) {
    switch (category) {
        case 'experiences':
            handleShrink('experiences');
            break;
        case 'education':
            handleShrink('education');
            break;
        case 'skills':
            handleShrink('skills');
            break;
        case 'volunteer':
            handleShrink('volunteer');
            break;
        default:
            break;
    }
}

function handleExpansion(category, gridColumns) {

    //* Reset other sections *//

    //Reset Experiences
    document.getElementById('experiences_infobox').style.height='300px';
    document.getElementById('experiences_infobox').style.boxShadow='gray 0px 0px 10px 2px';
    document.getElementById('experiences_section').style.display="flex";
    document.getElementById('experiences_section_expanded').style.display="none";
    document.getElementById('experiences_infobox').getElementsByTagName('button')[0].innerHTML='see more';


    //Reset Education
    document.getElementById('education_infobox').style.height='300px';
    document.getElementById('education_infobox').style.boxShadow='gray 0px 0px 10px 2px';
    document.getElementById('education_section').style.display="flex";
    document.getElementById('education_section_expanded').style.display="none";
    document.getElementById('education_infobox').getElementsByTagName('button')[0].innerHTML='see more';


    //Reset Skills
    document.getElementById('skills_infobox').style.height='300px';
    document.getElementById('skills_infobox').style.boxShadow='gray 0px 0px 10px 2px';
    document.getElementById('skills_section').style.display="flex";
    document.getElementById('skills_section_expanded').style.display="none";
    document.getElementById('skills_infobox').getElementsByTagName('button')[0].innerHTML='see more';


    //Reset Volunteer
    document.getElementById('volunteer_infobox').style.height='300px';
    document.getElementById('volunteer_infobox').style.boxShadow='gray 0px 0px 10px 2px';
    document.getElementById('volunteer_section').style.display="flex";
    document.getElementById('volunteer_section_expanded').style.display="none";
    document.getElementById('volunteer_infobox').getElementsByTagName('button')[0].innerHTML='see more';

    //* Handle the expansion of the clicked section *//

    let mobile = window.matchMedia("(max-width: 1000px)");

    if (!mobile.matches) {
        // Expand the clicked section
        document.getElementsByClassName("grid_infobox_container")[0].style.gridTemplateColumns = gridColumns;
    }





    // Set the height and box shadow for the expanded section
    document.getElementById(category + '_infobox').style.height='600px';
    document.getElementById(category +'_infobox').style.boxShadow='inset 0px 0px 6px 6px var(--darkneonswampgreen), gray 0px 0px 10px 2px';

    document.getElementById(category + '_section').style.display="none";
    document.getElementById(category + '_section_expanded').style.display="block";

    document.getElementById(category + '_infobox').getElementsByTagName('button')[0].innerHTML='see less';
}

function handleShrink(category) {

    //* Handle the expansion of the clicked section *//

    let mobile = window.matchMedia("(max-width: 1000px)");

    if (mobile.matches) {
        document.getElementById('infobox_container').style.gridTemplateColumns='1fr';
    } else {
        document.getElementById('infobox_container').style.gridTemplateColumns='1fr 1fr 1fr 1fr';
    }

    document.getElementById(category + '_infobox').style.height='300px';
    document.getElementById(category +'_infobox').style.boxShadow='gray 0px 0px 10px 2px';
    document.getElementById(category + '_section').style.display="flex";
    document.getElementById(category + '_section_expanded').style.display="none";
    document.getElementById(category + '_infobox').getElementsByTagName('button')[0].innerHTML='see more';
}
        