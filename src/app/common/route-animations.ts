import {
  animate, AnimationMetadata,
  AnimationTriggerMetadata,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const animationTiming = '0.5s ease';

const slideLeftAnimation: AnimationMetadata[] = [
  query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
  group([
    query(':enter', [
      style({transform: 'translateX(100%)', zIndex: 100}),
      animate(animationTiming, style({transform: 'translateX(0%)'})),
    ], {optional: true}),
    query(':leave', [
      style({transform: 'translateX(0%)'}),
      animate(animationTiming, style({transform: 'translateX(-100%)'})),
    ], {optional: true}),
  ]),
];

const slideRightAnimation: AnimationMetadata[] = [
  query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
  group([
    query(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(animationTiming, style({transform: 'translateX(0%)'})),
    ], {optional: true}),
    query(':leave', [
      style({transform: 'translateX(0%)'}),
      animate(animationTiming, style({transform: 'translateX(100%)'})),
    ], {optional: true}),
  ]),
];

const slideUpAnimation: AnimationMetadata[] = [
  query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
  group([
    query(':enter', [
      style({transform: 'translateY(100%)', display: 'block', height: '100%', zIndex: 1000}),
      animate(animationTiming, style({transform: 'translateY(0%)'})),
    ], {optional: true}),
    query(':leave', [
      style({transform: 'translateY(0%)', zIndex: -1000}),
    ], {optional: true}),
  ]),
];


const fader = [
  // Set a default  style for enter and leave
  query(':enter, :leave', [
    style({
      position: 'absolute',
      left: 0,
      width: '100%',
      opacity: 0,
      transform: 'scale(0) translateY(100%)',
    }),
  ]),
  // Animate the new page in
  query(':enter', [
    animate('600ms ease', style({opacity: 1, transform: 'scale(1) translateY(0)'})),
  ])
];


export const ROUTE_ANIMATIONS: AnimationTriggerMetadata = trigger('routeAnimations', [

  transition('HomePage => PokemonPage', fader),
  transition('PokemonPage => HomePage', slideRightAnimation),

  transition('HomePage => PokeballPage', slideLeftAnimation),
  transition('PokeballPage => HomePage', slideRightAnimation),

  transition('PokemonPage => PokeballPage', slideLeftAnimation),
  transition('PokeballPage => PokemonPage', slideRightAnimation),


]);


