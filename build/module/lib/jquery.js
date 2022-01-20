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
export function isInViewport(el) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9qcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzlCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNoQixJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDZixHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ1g7U0FBTSxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNYO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxFQUFFO0lBQzdCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDdEMsTUFBTSxhQUFhLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzFDLE1BQU0sY0FBYyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEQsTUFBTSxvQkFBb0IsR0FDeEIsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sY0FBYyxHQUFHLG9CQUFvQixHQUFHLGFBQWEsQ0FBQztJQUM1RCxPQUFPLENBQ0wsY0FBYyxHQUFHLEdBQUc7UUFDcEIsYUFBYSxHQUFHLFdBQVc7UUFDM0IsVUFBVSxHQUFHLGNBQWMsQ0FDNUIsQ0FBQztBQUNKLENBQUM7QUFFRCxvQ0FBb0M7QUFDcEMsMkNBQTJDO0FBQzNDLDREQUE0RDtBQUM1RCwrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLDJEQUEyRDtBQUMzRCwrQkFBK0I7QUFDL0IsMERBQTBEO0FBQzFELHNEQUFzRDtBQUN0RCwrREFBK0Q7QUFDL0QsV0FBVztBQUNYLDRCQUE0QjtBQUM1QixtQ0FBbUM7QUFDbkMsZ0NBQWdDO0FBQ2hDLEtBQUs7QUFDTCxLQUFLIn0=