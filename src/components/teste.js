function manageSegments() {
  const segments = [
    document.querySelector('.segment-1'),
    document.querySelector('.segment-2'),
    document.querySelector('.segment-3'),
    document.querySelector('.segment-4')
  ];

  const topScreen = document.documentElement.scrollTop;

  const topValues = segments.map(segment => {
    const topValue = segment.getBoundingClientRect().top + topScreen;
    return topValue;
  });

  segments.forEach((segment, index) => {
    if (window.scrollY > (topValues[index] - 300)) {
      segment.classList.add('-active');
    } else {
      segment.classList.remove('-active');
    }
  });
}


// function () {
//   const topScreen = document.documentElement.scrollTop;
//   [
//     '.segment-1',
//     '.segment-2',
//     '.segment-3',
//     '.segment-4'
//   ].map(selector => document.querySelector(selector))
//    .forEach((segment, index) => {
//      const topValue = segment.getBoundingClientRect().top + topScreen;
//      segment.classList.toggle('-active', window.scrollY > (topValue - 300));
//    });
// }