var button = document.querySelector('button');

// button.addEventListener('click',(e) => {
//   console.log(e);
// });

// Listening To An Event Using RxJS

//::::::::::::::::::::::::::::::::::::::::::::::::::Observable To Listen To An Event:::::::::::::::::::::::::::::::::::::::://
// Rx.Observable.fromEvent(button,'click')
//     .throttleTime(1000)
//     .map( (data) => {
//         return data.clientY;
//     })
//     .subscribe(
//        (coordinate)=>{
//            console.log(coordinate);
//     });
var observer = {
    next : function(value){
        console.log(value);
    },
    error: function(error){
        console.log(error)
    },
    complete : function(){
        console.log("Completed");
    }
}
// ::::::::::::::::::::::::::::::::::::::::::::::::::create Method To Create Observable:::::::::::::::::::::::::::::::::::::::::://
// Rx.Observable.fromEvent(button , 'click')
//     .throttleTime(1000)
//     .subscribe(observer);

// Rx.Observable.create(function(obs){
//         obs.next('First Value');     // Printed First
//         // obs.error('Error');
//         // obs.next('Second Value');
//         setTimeout(() => {
//           obs.next('Third Value')   // Printed Third
//           obs.complete('Completed');
//           obs.next('Fourth Value');
//         }, 3000)
//         obs.next('Second Value');   // Printed Second
//     })
//     .subscribe(observer);

//::::::::::::::::::::::::::::::::::::::::::::::::Unsubscribing To Subscription:::::::::::::::::::::::::::::::::::::::::::::::::::::://
// var subscription = Rx.Observable.create(function(obs){
//     button.onclick = (event) => {
//            obs.next(event);
//         }
//     })
//     .subscribe(observer);

// setTimeout(() => {
//     subscription.unsubscribe();
// },5000)


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::RxJS Operators:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
// var observable = Rx.Observable.interval(1000);

// var subscription = observable.map(function(value){
//         return "Number : "+value;
//     })
//     .throttleTime(2000)
//     .subscribe(observer);

// setTimeout(() => {
//     subscription.unsubscribe();
//   },1000);


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::Subject::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
// var subject = new Rx.Subject();

// subject.subscribe({
//     next : function(value){
//         console.log(value);
//     },
//     error : function(error){
//         console.log(error);
//     },
//     complete: function(){
//         console.log('Completed');
//     }
// })

// subject.subscribe( (value) => {
//     console.log(value);
// });

// subject.next('First Value');
// // subject.error('Error');
// subject.next('Second Value');
// subject.complete();

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::Filter Operator::::::::::::::::::::::::::::::::::::::::::::::::;//
// var observable = Rx.Observable.interval(1000);

// observable.filter(function(value){
//         return (value%2 === 0)
//     })
//    .subscribe(observer);

//:::::::::::::::::::::::::::::::::::::::::::::::::::debounceTime And distinctUntilChanged::::::::::::::::::::::::::::::::::://

// var input = document.querySelector('input');

// var observable = Rx.Observable.fromEvent(input,'input');

// observable.map((event) => {
//         return (event.target.value)
//     })
//     .debounceTime(4000)
//     .distinctUntilChanged()
//     .subscribe(observer)

//:::::::::::::::::::::::::::::::::::::::::::::::::::::scan() And reduce():::::::::::::::::::::::::::::::::::::::::::::::::://

// var observable = Rx.Observable.of(1,2,3,4,5);

// observable.reduce((total ,currentValue) => {
//             return total+currentValue;
//         },0)
//         .subscribe(observer);

// observable.scan((total ,currentValue) => {
//             return total+currentValue;
//         },0)
//         .subscribe(observer);

//::::::::::::::::::::::::::::::::::::::::::::::::::::::pluck():::::::::::::::::::::::::::::::::::::::::::::::::://

// var input = document.querySelector('input');

// var observable = Rx.Observable.fromEvent(input,'input');

// observable.pluck('target','value')
//     .debounceTime(4000)
//     .distinctUntilChanged()
//     .subscribe(observer)

//:::::::::::::::::::::::::::::::::::::::::::::::::::::mergeMap() Operator::::::::::::::::::::::::::::::::::::::::::::::::://

// var input1 = document.querySelector('#input1');
// var input2 = document.querySelector('#input2');

// var span = document.querySelector('span');

// var observable1 = Rx.Observable.fromEvent(input1,'input');
// var observable2 = Rx.Observable.fromEvent(input2,'input');

// observable1.mergeMap(
//         event1 => {
//             return observable2.map( event2 =>  event1.target.value+' '+event2.target.value
//            )}
//         )
//        .subscribe(
//            combinedValue =>  span.textContent = combinedValue
//         );

// observable1.subscribe((event) => {
//     span.textContent = event.target.value;
// })

// observable2.subscribe((event) =>{
//     span.textContent = event.target.value;
// });

//::::::::::::::::::::::::::::::::::::::::::::::::switchMap() Operator:::::::::::::::::::::::::::::::::::::::::::::::::::::::://

// var observable1 = Rx.Observable.fromEvent(button,'click');

// var observable2 = Rx.Observable.interval(1000);

// // observable1.subscribe(
// //     event => {
// //             observable2.subscribe(
// //                     value => console.log(value)
// //       )});

// // switchMap Helps Us To Cancel Older Subscription If We Switched Into The New Subscription // Try Uncommenting The Above Code
// observable1.switchMap(
//         event1 => {
//             return observable2
//         }
//     ).subscribe(
//         value => console.log(value)
//     );


//:::::::::::::::::::::::::::::::::::::::Behaviour Subject IN RxJS:::::::::::::::::::::::::::::::::::::::::::::::::::::://

var clickEmitted =  new Rx.BehaviorSubject('Not Clicked');   // It Takes Care Of Initialization Before The Subscription

var div = document.querySelector('div');

button.addEventListener('click',() => {
      clickEmitted.next('Clciked');
});

clickEmitted.subscribe(
        value => div.textContent = value
    );

