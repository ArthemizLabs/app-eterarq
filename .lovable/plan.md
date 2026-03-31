

## Plan: Swap grayscale sides on image comparison

Currently the `position="left"` image has `className="grayscale"` and `position="right"` is colorful. The component clips `left` = revealed from the right side, `right` = revealed from the left side.

To make left side gray and right side colorful (as the user sees it):
- Move `className="grayscale"` from the `position="left"` image to the `position="right"` image

### Change in `src/pages/LandingPage.tsx`

In the `PromiseSection`, swap the `grayscale` class:
- **Left image** (`position="left"`): remove `className="grayscale"` → colorful
- **Right image** (`position="right"`): add `className="grayscale"` → grayscale

This way, when the slider is at 50%, the left half shows grayscale and the right half shows colorful.

