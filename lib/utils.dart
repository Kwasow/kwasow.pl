import 'package:url_launcher/url_launcher.dart';

void launchURL(url) async {
  if (!await launchUrl(url)) {
    throw 'Could not launch $url';
  }
}
