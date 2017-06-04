import Quill from './quill';
import * as Formats from './formats';

Quill.register({
  'formats/bold': Formats.Bold,
  'formats/italic': Formats.Italic,
  'formats/underline': Formats.Underline,
  'formats/strike': Formats.Strike,
  'formats/align': Formats.AlignStyle,
  'formats/font': Formats.FontStyle,
  'formats/size': Formats.SizeStyle,
  'formats/background': Formats.BackgroundStyle,
  'formats/color': Formats.ColorStyle,
  'formats/link': Formats.Link,
  'formats/image': Formats.Image,
  'formats/video': Formats.Video,
  'formats/indent': Formats.Indent,
});

export default Quill;