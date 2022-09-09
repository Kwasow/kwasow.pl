import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:footer/footer.dart';
import 'package:githubpages/utils.dart';

class MainFooter extends Footer {
  static const String githubIcon = 'assets/github.svg';
  static const String twitterIcon = 'assets/twitter.svg';

  MainFooter()
      : super(
          backgroundColor: const Color.fromARGB(255, 39, 39, 39),
          padding: const EdgeInsets.all(5.0),
          alignment: Alignment.center,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Padding(
                padding: const EdgeInsets.only(right: 10, left: 50),
                child: SvgPicture.asset(
                  githubIcon,
                  color: Colors.white,
                ),
              ),
              Text.rich(
                TextSpan(children: [
                  TextSpan(
                      style: const TextStyle(
                        decoration: TextDecoration.underline,
                        color: Colors.white,
                      ),
                      text: 'Kwasow',
                      recognizer: TapGestureRecognizer()
                        ..onTap = () async {
                          launchURL('https://github.com/Kwasow');
                        }),
                ]),
              ),
              Padding(
                padding: const EdgeInsets.only(right: 10, left: 50),
                child: SvgPicture.asset(
                  twitterIcon,
                  color: Colors.white,
                ),
              ),
              Text.rich(
                TextSpan(children: [
                  TextSpan(
                      style: const TextStyle(
                        decoration: TextDecoration.underline,
                        color: Colors.white,
                      ),
                      text: '@KarolWasowski',
                      recognizer: TapGestureRecognizer()
                        ..onTap = () async {
                          launchURL('https://twitter.com/KarolWasowski');
                        }),
                ]),
              ),
            ],
          ),
        );
}
