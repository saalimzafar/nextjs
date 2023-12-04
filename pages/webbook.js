export default function() {
return (
<div className="body">
    <div className="book">
       <input type="checkbox" id="c1" />
       <input type="checkbox" id="c2" />
       <input type="checkbox" id="c3" />
       <div id="cover">
       <img src="/avatar.png" />
            </div>
            <div className="flip-book">
                <div className="flip" id="p1">
                    <div className="back">
                        <img src="/avatar.png" />
                        <label className="back-btn" htmlFor="c1">Back</label>
                    </div>
                    <div className="front">
                    <h1>Poem 1: Serenity

</h1>
                    <p>In whispered breeze, the willow sighs,
Its branches dance 'neath azure skies.
A tranquil pond, a mirror clear,
Reflects the beauty held so dear.
Nature's canvas, a tranquil scene,
Where peace and calm forever gleam.</p>
                    <label className="next-btn" htmlFor="c1">Next</label>
                    </div>
                </div>
                   <div className="flip" id="p2">
                    <div className="back">
                        <img src="/avatar.png"/>
                        
                        <label className="back-btn" htmlFor="c2">Back</label>
                    </div>
                    <div className="front">
                    <h1>Poem 2: Love's Embrace

</h1>
                    <p>Soft whispers float on gentle air,
Two souls entwined in love's affair.
In tender touch and longing gaze,
Their hearts alight in passion's blaze.
A symphony of joy and grace,
Love's embrace, a sacred space.

</p>
                    <label className="next-btn" htmlFor="c2">Next</label>
                    </div>
                </div>
                   <div className="flip" id="p3">
                    <div className="back">
                        <img src="/avatar.png"/>
                        <label className="back-btn" htmlFor="c3">Back</label>
                    </div>
                    <div className="front">
                    <h1>Poem 3: Night's Lullaby

</h1>
                    <p>The moon ascends, a radiant sphere,
Casting shadows, dreams appear.
Stars twinkle in the velvet night,
Guiding thoughts to take their flight.
Silent whispers, the night's soft hum,
Lulls the world as dreams succumb.

</p>
                    <label className="next-btn" htmlFor="c3">Next</label>
                    </div>
                </div>
            </div>
           <style jsx global>{`
          .body {
              margin:0;
              padding:0;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background:#111;
          }
              input {
                  display: none;
              }
              img{
                  width: 100%;
                  height: 100%;
              }
              .book{
                  display: flex;
                  
                  
                  
              }
              #cover, .flip-book {
                 width: 250px;
                 height:400px;
                 
              }
              
          .flip-book    {
                 position: relative;
                 perspective: 1500px;
              }
              .flip {
                 width: 100%; 
                 height: 100%;
                 position: absolute;
                 top:0;
                 left:0;
                 transform-origin: left;
                 transform-style: preserve-3d;
                 transform: rotateY(0deg);
                 transition: transform 0.5s ease-in-out;
                 color:#000;
                 
                
              }
              p{
                  font-size:15px;
                  line-height: 25px;
              }
              .front{
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top:0;
                  left:0;
             
                  background-color: #fff;
                  box-sizing: border-box;
                  padding: 20px 13px;
                  box-shadow: inset 20px 0 50px rgba(0,0,0,0.5) 0 2px 5px rgba(0,0,0,0.5) ;
                  
              }
              .back{
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top:0;
                  left:0;
                  
                  z-index: 99;
                  transform: rotateY(180deg);
                  backface-visibility: hidden;
                  background-color: #fff;
                  border:1px solid #fff;
              }
              .next-btn {
                  position: absolute;
                  bottom: 13px;
                  right: 13px;
                  cursor: pointer;
                  color:#000;
                  border: 2px solid #000;
                  padding:5px 10px;
              }
              .back-btn {
                  position: absolute;
                  bottom: 13px;
                  right: 13px;
                  cursor: pointer;
                  color:#000;
                  padding:5px 10px;
                  border: 2px solid #000;
              }
              #p1{
                  z-index: 3;
              }
              #p2 {
                  z-index: 2;
              }
              #p3 {
                  z-index: 1;
              }
              #c1:checked ~ .flip-book #p1 {
                  transform: rotateY(-180deg);
                  z-index: 1;
                  
              }
              #c2:checked ~ .flip-book #p2 {
                  transform: rotateY(-180deg);
                  z-index: 2;
                  
              }
                 #c3:checked ~ .flip-book #p3 {
                  transform: rotateY(-180deg);
                  z-index: 3;
                     
                 }
          
        `}</style>
        </div>
        </div>
)
}
