let icon = document.querySelector( ".icon" );
let iconSpan = document.querySelectorAll( ".icon span" );
let iconS = document.querySelector( ".icon .n");
let m = document.querySelector( ".icon .m" );

let p = document.querySelector( ".icon .p");
let menu = document.querySelector( " .header .menu" );

let head = document.querySelector( ".header" );


let arr = [ '1.jpg', "2.avif", "3.webp", "4.jpg", "5.jpg","05.webp" ];
let landing = document.querySelector( ".landing" );

 let currentImage=localStorage.getItem( "currentImage", false);
function randomize ()
{
    backgroundInterval = setInterval( () =>
    {
        let num = Math.floor( Math.random() * arr.length );
        landing.style.backgroundImage = 'url("image/' + arr[ num ] + '")';
        localStorage.setItem( "currentImage", arr[ num ] );
        
        landing.style.backgroundSize = "cover";
    },3000 );
}
randomize();

//////
let topI = document.querySelector( ".top" );
let scrollh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let up = document.querySelector( ".up" );


window.onscroll = function ()
{
    let hightTop = document.documentElement.scrollTop;
    topI.style.width = `${ ( hightTop / scrollh ) * 100 }%`;
    if ( hightTop > 1000 )
{
    up.style.right = "12px";
    }
    else
    {
        up.style.right = "-42px";
    }

}
up.onclick = function ()
{
    window.scrollTo( {
        top: "0",
        behavior:"smooth"
    })
}
//////////
let icon2 = document.querySelector( ".landing .two-icon" );

let nn = document.querySelector( ".landing  .nn" );
let mm = document.querySelector( ".landing  .mm" );
let i = document.querySelector( ".landing  .i" );
let b = document.querySelector( ".landing .b" );
let lefting = document.querySelector( ".lefting" );
let nO = document.querySelector( ".lefting .no" );
let yeS = document.querySelector( ".lefting .yes" );



nn.onclick = function ()
{
    lefting.classList.toggle( "open" );
}
mm.onclick = function ()
{
    lefting.classList.toggle( "open" );
}
i.onclick = function ()
{
    lefting.classList.toggle( "open" );
}
b.onclick = function ()
{
    lefting.classList.toggle( "open" );
}

///////featuring the color
let color = document.querySelectorAll( ".lefting .coloring .color" );
color.forEach(ele => {
    ele.onclick = function (e)
    {
        document.documentElement.style.setProperty( '--main-color', e.target.dataset.color );
        localStorage.setItem( "color", e.target.dataset.color );
    };
} );
///local storage




let background_ch = document.querySelectorAll( ".lefting .show span" );
background_ch.forEach( ele =>
{
    ele.onclick = function ( e )
    {
        if ( e.target.classList.contains( 'yes' ) )
        {
            localStorage.setItem( "image", "yes" );
            randomize();
        }
        else if ( e.target.classList.contains( 'no' ) )
        {
            localStorage.setItem( "image", "no" );
            // localStorage.setItem("currentImage",)
            clearInterval( backgroundInterval );

        }
    };
} );

let stor = localStorage.getItem( "color" );
localStorage.setItem( "image", "yes" );

window.onload = function ()
{
    if ( stor !== null )
    {
        document.documentElement.style.setProperty( '--main-color', stor );

    }
    if ( currentImage )
    {
        
        clearInterval( backgroundInterval );
        landing.style.backgroundImage = 'url("image/' + currentImage + '")';
        landing.style.backgroundSize = "cover";
        
    }
   

}



document.addEventListener( "click", ( ele ) =>
{
    if ( ele.target === icon )
    {
        menu.classList.toggle( "open" );
    }
    if ( menu.classList.contains( "open" ) &&ele.target!==icon && ele.target!==iconS && ele.target!==p && ele.target!==m )
    {
        menu.classList.toggle( "open" );
    }
    if ( ele.target !== lefting && ele.target !== nn && ele.target != mm && ele.target !== i && ele.target !== b && lefting.classList.contains( "open" ) && ele.target!==nO && ele.target!==yeS )
    {
        lefting.classList.toggle( "open" );
    }
    
} );


iconSpan.forEach(ele => {
    ele.onclick = function ()
    {
        menu.classList.toggle( "open" );
    }
});