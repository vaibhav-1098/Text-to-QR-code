const text=document.querySelector("textarea");
const imgBox=document.querySelector(".img-box");
const  form=document.querySelector("form");

// submit 
form.addEventListener('submit',(e)=>{
    e.preventDefault( );
    imgBox.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value})`;
})

// reset 
form.addEventListener('reset',(e)=>{
    e.preventDefault( );
    imgBox.src="";
    text.value="";
})
