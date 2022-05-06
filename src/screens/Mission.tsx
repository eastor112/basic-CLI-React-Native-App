import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import {data} from '../data/data';
import uuid from 'react-native-uuid';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const Mission = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {data.map((item, index) => (
          <View key={uuid.v4() as string}>
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={{
                  uri: `https://picsum.photos/id/${(index + 1) * 10}/200/300`,
                }}
              />
              <View style={styles.info}>
                <Text style={styles.title}>{item.about.substring(0, 25)}</Text>
                <Text style={styles.subTitle}>by {item.author}</Text>
                <View style={styles.tagsContainer}>
                  {item.tags.map(tag => (
                    <Text style={styles.tag} key={uuid.v4() as string}>
                      {tag.toUpperCase()}
                    </Text>
                  ))}
                </View>
                <View style={styles.containerComments}>
                  <Icon
                    style={styles.icon}
                    name="comments"
                    size={30}
                    color="#000"
                  />
                  <Text style={styles.comments}>
                    {item.comments.length} Comments
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: 'red',
  },
  scrollView: {
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  card: {
    flexDirection: 'row',
  },
  image: {
    flex: 4,
    backgroundColor: 'red',
    height: 220,
    marginHorizontal: 5,
  },
  info: {
    flex: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 24,
  },
  tag: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 2,
    marginVertical: 2,
    backgroundColor: '#444',
    borderRadius: 3,
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
  containerComments: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  comments: {
    fontSize: 20,
  },
  icon: {
    paddingRight: 10,
  },
  separator: {
    height: 2,
    backgroundColor: '#333',
    marginHorizontal: 5,
    marginVertical: 10,
  },
});

export default Mission;
