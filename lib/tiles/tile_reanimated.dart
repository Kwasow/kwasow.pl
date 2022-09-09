import 'package:flutter/material.dart';
import 'package:githubpages/tiles/tile.dart';
import 'package:githubpages/utils.dart';

void _onPressGithub(BuildContext context) {
  launchURL('https://github.com/software-mansion/react-native-reanimated');
}

void _onPressWebsite(BuildContext context) {
  launchURL('https://docs.swmansion.com/react-native-reanimated/');
}

const List<ClickableLine> subtextLines = [
  ClickableLine(text: 'GitHub', onPress: _onPressGithub),
  ClickableLine(text: 'Project site', onPress: _onPressWebsite)
];

class ReanimatedTile extends Tile {
  const ReanimatedTile({Key? key})
      : super(
          key: key,
          title: 'Reanimated',
          iconPath: 'assets/reanimated-icon.svg',
          subtextLines: subtextLines,
        );
}
