import 'package:flutter/material.dart';

class MusekitPrivacyPage extends StatelessWidget {
  const MusekitPrivacyPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Musekit privacy policy'),
        backgroundColor: const Color.fromARGB(255, 24, 24, 24),
      ),
      body: FutureBuilder<String>(
        future: _loadPolicy(context),
        builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
          List<Widget> children;
          if (snapshot.hasData) {
            children = <Widget>[Text(snapshot.requireData)];
          } else if (snapshot.hasError) {
            children = <Widget>[
              Center(
                child: Column(
                  children: [
                    const Icon(
                      Icons.error_outline,
                      color: Colors.red,
                      size: 60,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 16),
                      child: Text('Error: ${snapshot.error}'),
                    )
                  ],
                ),
              )
            ];
          } else {
            children = const <Widget>[
              SizedBox(
                width: 60,
                height: 60,
                child: CircularProgressIndicator(),
              ),
              Padding(
                padding: EdgeInsets.only(top: 16),
                child: Text('Loading...'),
              )
            ];
          }
          return Padding(
            padding: const EdgeInsets.only(top: 40, left: 40),
            child: Column(children: children),
          );
        },
      ),
    );
  }

  Future<String> _loadPolicy(BuildContext context) async {
    return await DefaultAssetBundle.of(context)
        .loadString('musekit-privacy.txt');
  }
}
