const items = document.querySelectorAll('.gallery-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.5
        });

        items.forEach(item => {
            observer.observe(item);
        });

const galleryImages=[...document.querySelectorAll('.gallery img')]     
const modalDiv=document.querySelector('#img1')
let currentSection=null;
let currentIndex=null;

galleryImages.map(galleryImage=>{
    galleryImage.addEventListener('click', (event)=>{
       console.log(event.target.src)
       currentSection=event.target.parentElement.parentElement.parentElement.classList[0]
       currentIndex=parseInt(event.target.dataset.index)
       const modalDivImg= modalDiv.querySelector('img')
       modalDivImg.src=event.target.src

      
       
       showModal(modalDiv)


    })

})

function hideModal() {
    const modalDiv=document.querySelector('#img1')
    modalDiv.style.display='none'
}
function showModal(modalDiv) {
    modalDiv.style.display='flex'
}

document.querySelector(".next-img").addEventListener('click',(event)=>{
    currentIndex++
    const netxImg=document.querySelector(`.${currentSection} [data-index="${currentIndex}"]`)
    if (netxImg){
        modalDiv.querySelector('img').src=netxImg.src
    }
   
})

document.querySelector(".pre-img").addEventListener('click',(event)=>{
    currentIndex--
    const netxImg=document.querySelector(`.${currentSection} [data-index="${currentIndex}"]`)
    if (netxImg){
        modalDiv.querySelector('img').src=netxImg.src

    }
    
})