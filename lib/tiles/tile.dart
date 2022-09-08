import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class ClickableLine {
  final String text;
  final Function onPress;

  const ClickableLine({required this.text, required this.onPress});
}

class Tile extends StatelessWidget {
  final String title;
  final String iconPath;
  final List<ClickableLine> subtextLines;

  const Tile(
      {Key? key,
      required this.title,
      required this.iconPath,
      this.subtextLines = const []})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(20)),
              color: Colors.white),
          alignment: Alignment.center,
          margin: const EdgeInsets.only(top: 40.0, bottom: 20),
          width: 200,
          height: 200,
          child: SvgPicture.asset(
            iconPath,
            color: Colors.black,
            semanticsLabel: 'Musekit app logo',
            width: 160,
            height: 160,
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(bottom: 10),
          child: Text(
            title,
            style: const TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
              fontSize: 20,
            ),
          ),
        ),
        for (var element in subtextLines)
          Text.rich(
            TextSpan(children: [
              TextSpan(
                style: const TextStyle(
                  decoration: TextDecoration.underline,
                  color: Colors.white,
                ),
                text: element.text,
                recognizer: TapGestureRecognizer()
                  ..onTap = () async {
                    Function.apply(element.onPress, [context]);
                  },
              ),
            ]),
          )
      ],
    );
  }
}
