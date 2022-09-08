import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:footer/footer_view.dart';
import 'package:githubpages/main_footer.dart';
import 'package:githubpages/musekit_privacy.dart';
import 'package:githubpages/tiles/tile.dart';
import 'package:githubpages/tiles/tile_musekit.dart';
import 'utils.dart';

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
      initialRoute: '/',
      routes: {
        '/': ((context) => const MyHomePage()),
        '/musekit_privacy': ((context) => const MusekitPrivacyPage())
      },
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FooterView(
        footer: MainFooter(),
        children: [
          Column(
            children: const [
              Align(
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
              Align(
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
              MusekitTile()
            ],
          ),
        ],
      ),
    );
  }
}
