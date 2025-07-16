
        let experiences_clicked = false;
        let education_clicked = false;
        let skills_clicked = false;
        let volunteer_clicked = false;


        function expand(category) {
            switch (category) {
                case 'experiences' && !experiences_clicked:
                    handleExpansion('experiences', '2fr 1fr 1fr 1fr');
                    break;
                case 'education' && !education_clicked:
                    handleExpansion('education', '1fr 2fr 1fr 1fr');
                    break;
                case 'skills' && !skills_clicked:
                    handleExpansion('skills', '1fr 1fr 2fr 1fr');
                    break;
                case 'volunteer' && !volunteer_clicked:
                    handleExpansion('volunteer', '1fr 1fr 1fr 2fr');
                    break;
                default:
                    break;
            }

        }

        function shrink(category) {
            switch (category) {
                case 'experiences' && experiences_clicked:
                    handleShrink('experiences');
                    break;
                case 'education' && education_clicked:
                    handleShrink('education');
                    break;
                case 'skills' && skills_clicked:
                    handleShrink('skills');
                    break;
                case 'volunteer' && volunteer_clicked:
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
            document.getElementById('experiences_section').style.display="block";
            document.getElementById('experiences_section_expanded').style.display="none";
            document.getElementById('experiences_infobox').getElementsByTagName('button')[0].innerHTML='see more';


            //Reset Education
            document.getElementById('education_infobox').style.height='300px';
            document.getElementById('education_section').style.display="block";
            document.getElementById('education_section_expanded').style.display="none";
            document.getElementById('education_infobox').getElementsByTagName('button')[0].innerHTML='see more';


            //Reset Skills
            document.getElementById('skills_infobox').style.height='300px';
            document.getElementById('skills_section').style.display="block";
            document.getElementById('skills_section_expanded').style.display="none";
            document.getElementById('skills_infobox').getElementsByTagName('button')[0].innerHTML='see more';


            //Reset Volunteer
            document.getElementById('volunteer_infobox').style.height='300px';
            document.getElementById('volunteer_section').style.display="block";
            document.getElementById('volunteer_section_expanded').style.display="none";
            document.getElementById('volunteer_infobox').getElementsByTagName('button')[0].innerHTML='see more';

            // Reset clicked states
            experiences_clicked = false;
            education_clicked = false;
            skills_clicked = false;
            volunteer_clicked = false;



            //* Handle the expansion of the clicked section *//

            let mobile = window.matchMedia("(max-width: 1000px)");

            if (mobile.matches) {
                return;
            } else {
                // Expand the clicked section
                document.getElementById('grid_infobox_container').style.gridTemplateColumns= gridColumns;
            }





            // Set the height and box shadow for the expanded section
            document.getElementById('${category}_infobox').style.height='600px';
            document.getElementById('${category}_infobox').style.boxShadow='inset 0px 0px 6px 6px var(--darkneonswampgreen), gray 0px 0px 10px 2px';

            document.getElementById('${category}_section').style.display="none";
            document.getElementById('${category}_section_expanded').style.display="block";

            document.getElementById('${category}_infobox').getElementsByTagName('button')[0].innerHTML='see less';
        }

        function handleShrink(category) {
             document.getElementById('infobox_container').style.gridTemplateColumns='25% 25% 25% 25%';
                
            document.getElementById('experiences_infobox').style.height='300px';
            document.getElementById('experiences_infobox').style.boxShadow='gray 0px 0px 10px 2px';

            document.getElementById('experiences_section').style.display="block";
            document.getElementById('experiences_section_expanded').style.display="none";

            document.getElementById('experiences_infobox').getElementsByTagName('button')[0].innerHTML='see more';

            document.getElementById('education_infobox').style.height='300px';

            document.getElementById('skills_infobox').style.height='300px';

            document.getElementById('volunteer_infobox').style.height='300px';

            experiences_clicked = false;
            education_clicked = false;
            skills_clicked = false;
            volunteer_clicked = false;
        }

        function experiencesExpansion() {
            if (experiences_clicked == false) {

                document.getElementById('infobox_container').style.gridTemplateColumns='55% 15% 15% 15%';

                document.getElementById('experiences_infobox').style.height='600px';
                document.getElementById('experiences_infobox').style.boxShadow='inset 0px 0px 6px 6px var(--darkneonswampgreen), gray 0px 0px 10px 2px';

                document.getElementById('experiences_section').style.display="none";
                document.getElementById('experiences_section_expanded').style.display="block";

                document.getElementById('experiences_infobox').getElementsByTagName('button')[0].innerHTML='see less';

                document.getElementById('education_infobox').style.height='300px';
                document.getElementById('education_section').style.display="block";
                document.getElementById('education_section_expanded').style.display="none";
                document.getElementById('education_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                document.getElementById('skills_infobox').style.height='300px';
                document.getElementById('skills_section').style.display="block";
                document.getElementById('skills_section_expanded').style.display="none";
                document.getElementById('skills_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                document.getElementById('volunteer_infobox').style.height='300px';
                document.getElementById('volunteer_section').style.display="block";
                document.getElementById('volunteer_section_expanded').style.display="none";
                document.getElementById('volunteer_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                experiences_clicked = true;
                education_clicked = false;
                skills_clicked = false;
                volunteer_clicked = false;

            } else if (experiences_clicked == true) {
                document.getElementById('infobox_container').style.gridTemplateColumns='25% 25% 25% 25%';
                
                document.getElementById('experiences_infobox').style.height='300px';
                document.getElementById('experiences_infobox').style.boxShadow='gray 0px 0px 10px 2px';

                document.getElementById('experiences_section').style.display="block";
                document.getElementById('experiences_section_expanded').style.display="none";

                document.getElementById('experiences_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                document.getElementById('education_infobox').style.height='300px';

                document.getElementById('skills_infobox').style.height='300px';

                document.getElementById('volunteer_infobox').style.height='300px';

                experiences_clicked = false;
                education_clicked = false;
                skills_clicked = false;
                volunteer_clicked = false;
            }

            setTimeout(() => {
                document.getElementById('experiences_infobox').scrollIntoViewIfNeeded({ behavior: "smooth", block: "end"});
            }, 300);
        }
 
        function educationExpansion() {
            if (education_clicked == false) {

                document.getElementById('infobox_container').style.gridTemplateColumns='15% 55% 15% 15%';

                document.getElementById('experiences_infobox').style.height='300px';
                document.getElementById('experiences_section').style.display="block";
                document.getElementById('experiences_section_expanded').style.display="none";
                document.getElementById('experiences_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                document.getElementById('education_infobox').style.height='600px';
                document.getElementById('education_infobox').style.boxShadow='inset 0px 0px 6px 6px var(--darkneonswampgreen), gray 0px 0px 10px 2px';

                document.getElementById('education_section').style.display="none";
                document.getElementById('education_section_expanded').style.display="block";

                document.getElementById('education_infobox').getElementsByTagName('button')[0].innerHTML='see less';

                document.getElementById('skills_infobox').style.height='300px';
                document.getElementById('skills_section').style.display="block";
                document.getElementById('skills_section_expanded').style.display="none";
                document.getElementById('skills_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                document.getElementById('volunteer_infobox').style.height='300px';
                document.getElementById('volunteer_section').style.display="block";
                document.getElementById('volunteer_section_expanded').style.display="none";
                document.getElementById('volunteer_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                experiences_clicked = false;
                education_clicked = true;
                skills_clicked = false;
                volunteer_clicked = false;

            } else if (education_clicked == true) {
                document.getElementById('infobox_container').style.gridTemplateColumns='25% 25% 25% 25%';

                document.getElementById('experiences_infobox').style.height='300px';

                document.getElementById('education_infobox').style.height='300px';
                document.getElementById('education_infobox').style.boxShadow='gray 0px 0px 10px 2px';

                document.getElementById('education_section').style.display="block";
                document.getElementById('education_section_expanded').style.display="none";

                document.getElementById('education_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                document.getElementById('skills_infobox').style.height='300px';

                document.getElementById('volunteer_infobox').style.height='300px';

                experiences_clicked = false;
                education_clicked = false;
                skills_clicked = false;
                volunteer_clicked = false;
            }

            setTimeout(() => {
                document.getElementById('education_infobox').scrollIntoViewIfNeeded({ behavior: "smooth", block: "end"});
            }, 300);
        }
 
        function skillsExpansion() {
            if (skills_clicked == false) {

                document.getElementById('infobox_container').style.gridTemplateColumns='15% 15% 55% 15%';


                /* Experience */
                document.getElementById('experiences_infobox').style.height='300px';
                document.getElementById('experiences_section').style.display="block";
                document.getElementById('experiences_section_expanded').style.display="none";
                document.getElementById('experiences_infobox').getElementsByTagName('button')[0].innerHTML='see more';


                /* Education */
                document.getElementById('education_infobox').style.height='300px';
                document.getElementById('education_section').style.display="block";
                document.getElementById('education_section_expanded').style.display="none";
                document.getElementById('education_infobox').getElementsByTagName('button')[0].innerHTML='see more';


                /* Skills */
                document.getElementById('skills_infobox').style.height='600px';
                document.getElementById('skills_infobox').style.boxShadow='inset 0px 0px 6px 6px var(--darkneonswampgreen), gray 0px 0px 10px 2px';

                document.getElementById('skills_section').style.display="none";
                document.getElementById('skills_section_expanded').style.display="block";

                document.getElementById('skills_infobox').getElementsByTagName('button')[0].innerHTML='see less';


                /* Volunteer */
                document.getElementById('volunteer_infobox').style.height='300px';
                document.getElementById('volunteer_section').style.display="block";
                document.getElementById('volunteer_section_expanded').style.display="none";
                document.getElementById('volunteer_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                experiences_clicked = false;
                education_clicked = false;
                skills_clicked = true;
                volunteer_clicked = false;

            } else if (skills_clicked == true) {
                document.getElementById('infobox_container').style.gridTemplateColumns='25% 25% 25% 25%';

                document.getElementById('experiences_infobox').style.height='300px';

                document.getElementById('education_infobox').style.height='300px';

                document.getElementById('skills_infobox').style.height='300px';
                document.getElementById('skills_infobox').style.boxShadow='gray 0px 0px 10px 2px';

                document.getElementById('skills_section').style.display="block";
                document.getElementById('skills_section_expanded').style.display="none";

                document.getElementById('skills_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                document.getElementById('volunteer_infobox').style.height='300px';

                experiences_clicked = false;
                education_clicked = false;
                skills_clicked = false;
                volunteer_clicked = false;
            }

            setTimeout(() => {
                document.getElementById('skills_infobox').scrollIntoViewIfNeeded({ behavior: "smooth", block: "end"});
            }, 300);
        }

        function volunteerExpansion() {
            if (volunteer_clicked == false) {

                document.getElementById('infobox_container').style.gridTemplateColumns='15% 15% 15% 55%';

                document.getElementById('experiences_infobox').style.height='300px';
                document.getElementById('experiences_section').style.display="block";
                document.getElementById('experiences_section_expanded').style.display="none";
                document.getElementById('experiences_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                document.getElementById('education_infobox').style.height='300px';
                document.getElementById('education_section').style.display="block";
                document.getElementById('education_section_expanded').style.display="none";
                document.getElementById('education_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                document.getElementById('skills_infobox').style.height='300px';
                document.getElementById('skills_section').style.display="block";
                document.getElementById('skills_section_expanded').style.display="none";
                document.getElementById('skills_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                document.getElementById('volunteer_infobox').style.height='600px';
                document.getElementById('volunteer_infobox').style.boxShadow='inset 0px 0px 6px 6px var(--darkneonswampgreen), gray 0px 0px 10px 2px';

                document.getElementById('volunteer_section').style.display="none";
                document.getElementById('volunteer_section_expanded').style.display="block";

                document.getElementById('volunteer_infobox').getElementsByTagName('button')[0].innerHTML='see less';

                experiences_clicked = false;
                education_clicked = false;
                skills_clicked = false;
                volunteer_clicked = true;

            } else if (volunteer_clicked == true) {
                document.getElementById('infobox_container').style.gridTemplateColumns='25% 25% 25% 25%';

                document.getElementById('experiences_infobox').style.height='300px';

                document.getElementById('education_infobox').style.height='300px';

                document.getElementById('skills_infobox').style.height='300px';

                document.getElementById('volunteer_infobox').style.height='300px';
                document.getElementById('volunteer_infobox').style.boxShadow='gray 0px 0px 10px 2px';

                document.getElementById('volunteer_section').style.display="block";
                document.getElementById('volunteer_section_expanded').style.display="none";

                document.getElementById('volunteer_infobox').getElementsByTagName('button')[0].innerHTML='see more';

                experiences_clicked = false;
                education_clicked = false;
                skills_clicked = false;
                volunteer_clicked = false;
            }

            setTimeout(() => {
                document.getElementById('volunteer_infobox').scrollIntoViewIfNeeded({ behavior: "smooth", block: "end"});
            }, 300);
        }
        