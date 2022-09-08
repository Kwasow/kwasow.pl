import 'package:flutter/material.dart';
import 'package:githubpages/tiles/tile.dart';
import 'package:githubpages/utils.dart';

void _onPressPrivacy(BuildContext context) {
  Navigator.pushNamed(context, "/musekit_privacy");
}

void _onPressPlayStore(BuildContext context) {
  launchURL("https://play.google.com/store/apps/details?id=com.kwasow.musekit");
}

void _onPressGithub(BuildContext context) {
  launchURL("https://github.com/Kwasow/Musekit");
}

const List<ClickableLine> subtextLines = [
  ClickableLine(text: "Privacy Policy", onPress: _onPressPrivacy),
  ClickableLine(text: "Play Store", onPress: _onPressPlayStore),
  ClickableLine(text: "GitHub", onPress: _onPressGithub)
];

class MusekitTile extends Tile {
  const MusekitTile({Key? key})
      : super(
          key: key,
          title: "Musekit",
          iconPath: "assets/musekit-icon.svg",
          subtextLines: subtextLines,
        );
}
