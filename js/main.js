function dynamicList(){
    sections.forEach(section=>{
        const sectionId=sections.id;
        const sectionTitle=sections.dataset.nav;
        const listElement=document.createElement('li');
        listElement.innerHTML=`<a class='menu_link href=${sectionId}>${sectionTitle}</a>`
        list.appendChild(listElement);
        listElement.addEventListener("click", (evet)=>{
            section.scrollIntoView(
                { behavior:"smooth"}
            ) })})}

    function addHighLighting(){

        sections.forEach((section)=>{
            const links=document.querySelectorAll("a .menu_link");
            const secTop=sections.getBoundingClientRec().top;
            section.classList.remove("your-active-class");

            if(secTop>=0 && secTop<300)
            {
                section.classList.add("your-active-class");

                links.forEach((link)=>{
                    if(link.textContent === section.dataset.nav){
                        link.classList.add("active");
                    }
                    else{
                        link.classList.remove("active");
                    }})}
            else{
                section.classList.remove("your-active-class");
            }})}

    
