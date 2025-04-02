import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JigsawPiece } from '../types/AITransformationTypes';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Updated interface to match the actual ref types
interface AnimationRefs {
  containerRef: RefObject<HTMLDivElement | null>;
  jigsawRefs: RefObject<Array<HTMLDivElement | null>>;
  contentCardRef: RefObject<Array<HTMLDivElement | null>>;
  arrowRef: RefObject<HTMLDivElement | null>;
  benefitsArrowRef: RefObject<HTMLDivElement | null>;
}

export const useAITransformationAnimation = (
  refs: AnimationRefs,
  jigsawPieces: JigsawPiece[]
) => {
  useEffect(() => {
    if (!refs.containerRef.current) return;

    // Set initial states for jigsaw pieces
    if (refs.jigsawRefs.current) {
      refs.jigsawRefs.current.forEach((ref, index) => {
        if (ref) {
          const piece = jigsawPieces[index];
          gsap.set(ref, {
            x: piece.initialPosition.x,
            y: piece.initialPosition.y,
            rotation: piece.initialPosition.rotate,
            opacity: 0.3,
            scale: 0.8
          });
          
          // Set initial text to full title
          const titleElement = ref.querySelector('h3');
          if (titleElement) {
            titleElement.textContent = piece.title;
          }
        }
      });
    }

    // Set initial state for content card
    if (refs.contentCardRef.current) {
      // Since contentCardRef is now an array, we need to iterate through it
      refs.contentCardRef.current.forEach(card => {
        if (card) {
          gsap.set(card, {
            opacity: 0,
            y: 20
          });
        }
      });
    }

    // Set initial state for arrow
    if (refs.arrowRef.current) {
      gsap.set(refs.arrowRef.current, {
        opacity: 0,
        scaleY: 0
      });
    }

    // Set initial state for benefits arrow
    if (refs.benefitsArrowRef.current) {
      gsap.set(refs.benefitsArrowRef.current, {
        opacity: 0,
        scaleY: 0
      });
    }

    // Create a timeline for the jigsaw animation
    const jigsawTl = gsap.timeline({
      scrollTrigger: {
        trigger: refs.containerRef.current,
        start: "top 80%",
        end: "center center",
        scrub: 1,
        markers: false
      }
    });

    // Animate each jigsaw piece
    if (refs.jigsawRefs.current) {
      refs.jigsawRefs.current.forEach((ref, index) => {
        if (ref) {
          const piece = jigsawPieces[index];
          
          // Position and appearance animation
          jigsawTl.to(ref, {
            x: piece.finalPosition.x,
            y: piece.finalPosition.y,
            rotation: piece.finalPosition.rotate,
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: "power1.inOut"
          }, 0);
          
          // Text transformation animation
          const titleElement = ref.querySelector('h3');
          if (titleElement) {
            jigsawTl.to(titleElement, {
              innerText: piece.shortTitle,
              duration: 0.1,
              ease: "none",
              onUpdate: function() {
                // This ensures the text changes at the midpoint of the animation
                const progress = jigsawTl.progress();
                if (progress >= 0.5 && titleElement.textContent !== piece.shortTitle) {
                  titleElement.textContent = piece.shortTitle;
                } else if (progress < 0.5 && titleElement.textContent !== piece.title) {
                  titleElement.textContent = piece.title;
                }
              }
            }, 0);
          }
        }
      });
    }

    // Create a timeline for the content card
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: refs.containerRef.current,
        start: "top 60%",
        end: "center center",
        scrub: 1,
        markers: false
      }
    });

    // Animate the content card
    if (refs.contentCardRef.current) {
      refs.contentCardRef.current.forEach(card => {
        if (card) {
          contentTl.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power1.inOut"
          });
        }
      });
    }

    // Create a timeline for the arrow animation
    const arrowTl = gsap.timeline({
      scrollTrigger: {
        trigger: refs.containerRef.current,
        start: "top 70%",
        end: "center center",
        scrub: 1,
        markers: false
      }
    });

    // Animate the arrow
    if (refs.arrowRef.current) {
      arrowTl.to(refs.arrowRef.current, {
        opacity: 1,
        scaleY: 1,
        duration: 0.3,
        ease: "power1.inOut"
      });
    }

    // Create a timeline for the benefits arrow animation
    const benefitsArrowTl = gsap.timeline({
      scrollTrigger: {
        trigger: refs.containerRef.current,
        start: "center 60%",
        end: "bottom 40%",
        scrub: 1,
        markers: false
      }
    });

    // Animate the benefits arrow
    if (refs.benefitsArrowRef.current) {
      benefitsArrowTl.to(refs.benefitsArrowRef.current, {
        opacity: 1,
        scaleY: 1,
        duration: 0.3,
        ease: "power1.inOut"
      });
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [refs, jigsawPieces]);
}; 