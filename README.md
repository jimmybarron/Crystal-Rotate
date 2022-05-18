# Crystal-Rotate

[A quick proof of concept](https://crystalrotate.netlify.app/) to see if a smooth rotation around a crystal could be accomplished for a product page.

I filmed a crystal being spun around on a skateboard wheel at a high frame rate to make a slow motion rotation. I then exported all the frames individually and complied them into a 'sprite sheet' using the Unity Game Engine's TexturePacker. This allowed the rotation video to have better compatibility by having it not be a video at all. The file size could also more easily be managed and compressed quickly on the fly, as it's just a single image instead of a video.

Using [threesixty.js](https://github.com/mladenilic/threesixty.js) for the rotation mechanics.

![](https://raw.githubusercontent.com/jimmybarron/Crystal-Rotate/master/image-sequence/crystal_sprite_preview.png)
