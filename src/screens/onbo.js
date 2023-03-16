import React, { useRef, useState } from 'react';
import { Feather } from '@expo/vector-icons'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Animated,
    FlatList
} from 'react-native';
import Onbo1 from '../components/onbo1';
import { slides } from '../constant';
const { width, height } = Dimensions.get('screen');
export default function Onbo() {
    const [contentOffset, setContentOffset] = React.useState({ x: 0, y: 0 });
    const [contentSize, setContentSize] = React.useState(0);
    const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollPerc = (contentOffset.x / (contentSize - scrollViewWidth)) * (50);
    const viewableItemsChange = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const slide = useRef(null);
    const nextFunc = () => {
        if (currentIndex < slides.length - 1) {
            slide.current.scrollToIndex({
                animated: true,
                index: currentIndex + 1
            })
        }
    }
    const prevFunc = () => {
        slide.current.scrollToIndex({
            animated: true,
            index: currentIndex - 1
        })
    }
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            bounces={false}
        >
            <View style={styles.header}>
                <Image source={require('../images/logo.png')} />
                <TouchableOpacity style={styles.skip}>
                    <Text style={styles.skipTxt}>Skip</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                ref={slide}
                data={slides}
                horizontal
                onScroll={e => {
                    setContentOffset(e.nativeEvent.contentOffset);
                }}
                onContentSizeChange={(width, _) => {
                    setContentSize(width);
                }}
                onLayout={e => {
                    setScrollViewWidth(e.nativeEvent.layout.width);
                }}
                pagingEnabled
                bounces={false}
                renderItem={(item) => <Onbo1 data={item} />}
                onViewableItemsChanged={viewableItemsChange}
                viewabilityConfig={viewConfig}
            />

            <View style={styles.btnCon}>
                <View style={styles.innerBtns}>
                    {
                        currentIndex == 0 || currentIndex == slides.length - 1 ?
                            null
                            :
                            <TouchableOpacity style={styles.prevBtn} onPress={() => {
                                prevFunc()
                            }}>
                                <Feather name="arrow-left" size={24} color="black" />
                            </TouchableOpacity>
                    }
                    <View style={styles.nextGroup}>
                        <View style={styles.scrollIncator}>
                            <Animated.View style={[{
                                ...styles.indicator,
                                transform: [{ translateX: scrollPerc ? scrollPerc : 0 }]
                            }]}
                            >
                            </Animated.View>
                        </View>
                        {
                            currentIndex == slides.length - 1 ?
                                <TouchableOpacity style={styles.btn} onPress={() => {
                                    nextFunc()
                                }}>
                                    <Text style={styles.btnTxt}>let’s start</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.btn} onPress={() => {
                                    nextFunc()
                                }}>
                                    <Text style={styles.btnTxt}>Next</Text>
                                </TouchableOpacity>
                        }
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    skip: {
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFDFDF',
        width: 76,
        height: 30,
        borderRadius: 100,
    },
    skipTxt: {
        color: "#2A2A2A",
        fontSize: 12
    },
    btnCon: {
        position: 'absolute',
        bottom: 30,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 190,
        height: 54,
        backgroundColor: "#8BC83F",
        borderRadius: 10
    },
    btnTxt: {
        color: "#FFFFFF",
        fontWeight: '700',
        fontSize: 16
    },
    prevBtn: {
        alignSelf: 'flex-end',
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 54,
        height: 54,
        borderRadius: 100,
        backgroundColor: "#FFFFFF"
    },
    innerBtns: {
        flexDirection: 'row',
    },
    nextGroup: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollIncator: {
        marginBottom: 8,
        width: 75,
        height: 3,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 3,
    },
    indicator: {
        width: 25,
        height: 3,
        backgroundColor: "#FFFFFF",
        elevation: 1,
        borderRadius: 3,
    }
})
