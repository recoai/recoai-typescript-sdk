"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInViewport = void 0;
function clipNum(value, min, max) {
    let out = value;
    if (value < min) {
        out = min;
    }
    else if (value > max) {
        out = max;
    }
    return out;
}
function isInViewport(el) {
    const elementTop = $(el).offset().top;
    const elementBottom = elementTop + $(el).outerHeight();
    const elementHeight = $(el).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    const visibleElementHeight = clipNum(elementBottom, viewportTop, viewportBottom) -
        clipNum(elementTop, viewportTop, viewportBottom);
    const percentVisible = visibleElementHeight / elementHeight;
    return (percentVisible > 0.7 &&
        elementBottom > viewportTop &&
        elementTop < viewportBottom);
}
exports.isInViewport = isInViewport;
// $.fn.isInViewport = function () {
// const elementTop = $(this).offset().top;
// const elementBottom = elementTop + $(this).outerHeight();
// const elementHeight = $(this).outerHeight();
// const viewportTop = $(window).scrollTop();
// const viewportBottom = viewportTop + $(window).height();
// const visibleElementHeight =
//   clipNum(elementBottom, viewportTop, viewportBottom) -
//   clipNum(elementTop, viewportTop, viewportBottom);
// const percentVisible = visibleElementHeight / elementHeight;
// return (
//   percentVisible > 0.7 &&
//   elementBottom > viewportTop &&
//   elementTop < viewportBottom
// );
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9qcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzlCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNoQixJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDZixHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ1g7U0FBTSxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNYO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLEVBQUU7SUFDN0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUN0QyxNQUFNLGFBQWEsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQyxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUMsTUFBTSxjQUFjLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4RCxNQUFNLG9CQUFvQixHQUN4QixPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUM7UUFDbkQsT0FBTyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDbkQsTUFBTSxjQUFjLEdBQUcsb0JBQW9CLEdBQUcsYUFBYSxDQUFDO0lBQzVELE9BQU8sQ0FDTCxjQUFjLEdBQUcsR0FBRztRQUNwQixhQUFhLEdBQUcsV0FBVztRQUMzQixVQUFVLEdBQUcsY0FBYyxDQUM1QixDQUFDO0FBQ0osQ0FBQztBQWZELG9DQWVDO0FBRUQsb0NBQW9DO0FBQ3BDLDJDQUEyQztBQUMzQyw0REFBNEQ7QUFDNUQsK0NBQStDO0FBQy9DLDZDQUE2QztBQUM3QywyREFBMkQ7QUFDM0QsK0JBQStCO0FBQy9CLDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQsK0RBQStEO0FBQy9ELFdBQVc7QUFDWCw0QkFBNEI7QUFDNUIsbUNBQW1DO0FBQ25DLGdDQUFnQztBQUNoQyxLQUFLO0FBQ0wsS0FBSyJ9