import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:footer/footer_view.dart';
import 'package:githubpages/musekit_privacy.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:footer/footer.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme.apply(
        bodyColor: Colors.white,
        displayColor: Colors.white,
        fontFamily: 'RobotoMono');

    return MaterialApp(
      title: 'Kwasow',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          textTheme: textTheme,
          scaffoldBackgroundColor: const Color.fromARGB(255, 24, 24, 24)),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  final String musekitIcon = 'assets/musekit-icon.svg';
  final String githubIcon = 'assets/github.svg';
  final String twitterIcon = 'assets/twitter.svg';

  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FooterView(
        children: [
          Column(
            children: [
              const Align(
                alignment: Alignment.centerLeft,
                child: Padding(
                  padding: EdgeInsets.only(left: 40.0, top: 40),
                  child: Text(
                    "Hi, I'm Karol.",
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 30.0,
                    ),
                  ),
                ),
              ),
              const Align(
                alignment: Alignment.centerLeft,
                child: Padding(
                  padding: EdgeInsets.only(left: 40, bottom: 40),
                  child: Text(
                    "These are the projects I am currently working on:",
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 30.0,
                    ),
                  ),
                ),
              ),
              Column(
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
                      musekitIcon,
                      color: Colors.black,
                      semanticsLabel: 'Musekit app logo',
                      width: 160,
                      height: 160,
                    ),
                  ),
                  const Text(
                    "Musekit",
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 20,
                    ),
                  ),
                  Text.rich(
                    TextSpan(children: [
                      TextSpan(
                          style: const TextStyle(
                            decoration: TextDecoration.underline,
                            color: Colors.white,
                          ),
                          text: "Privacy policy",
                          recognizer: TapGestureRecognizer()
                            ..onTap = () async {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) =>
                                          const MusekitPrivacyPage()));
                            }),
                    ]),
                  ),
                  Text.rich(
                    TextSpan(children: [
                      TextSpan(
                          style: const TextStyle(
                            decoration: TextDecoration.underline,
                            color: Colors.white,
                          ),
                          text: "GitHub",
                          recognizer: TapGestureRecognizer()
                            ..onTap = () async {
                              _launchURL("https://github.com/Kwasow/Musekit");
                            }),
                    ]),
                  ),
                ],
              ),
            ],
          ),
        ],
        footer: Footer(
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
                      text: "Kwasow",
                      recognizer: TapGestureRecognizer()
                        ..onTap = () async {
                          _launchURL("https://github.com/Kwasow");
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
                      text: "@KarolWasowski",
                      recognizer: TapGestureRecognizer()
                        ..onTap = () async {
                          _launchURL("https://twitter.com/KarolWasowski");
                        }),
                ]),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _launchURL(url) async {
    if (!await launch(url)) {
      throw 'Could not launch $url';
    }
  }
}
