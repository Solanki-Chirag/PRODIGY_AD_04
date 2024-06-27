import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Pressable, Image, Dimensions } from 'react-native';
import styles from "./Style";


const App: React.FC = () => {
  const [activePlayer, setActivePlayer] = useState<'X' | 'O'>('X');
  const [markers, setMarkers] = useState<(null | 'X' | 'O')[]>([
    null, null, null,
    null, null, null,
    null, null, null
  ]);

  const markPosition = (position: number) => {
    if (!markers[position]) {
      let temp = [...markers];
      temp[position] = activePlayer;
      setMarkers(temp);
      setActivePlayer(activePlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetMarkers = () => {
    setMarkers([
      null, null, null,
      null, null, null,
      null, null, null
    ]);
  };

  const calculateWinner = (squares: (null | 'X' | 'O')[]): 'X' | 'O' | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(markers);
    if (winner) {
      alert(`Player ${winner} Won!`);
      resetMarkers();
    } else if (markers.every((marker) => marker !== null)) {
      alert("Draw!");
      resetMarkers();
    }
  }, [markers]);

  return (
    <SafeAreaView style={styles.body}>
      <View style={[styles.playerInfo, { backgroundColor: activePlayer === 'X' ? '#007FF4' : '#F40075' }]}>
        <Text style={styles.playerTxt}>Player {activePlayer}'s turn</Text>
      </View>
      <View style={styles.mainContainer}>
        
        {/*Cell 00 */}
        <Pressable style={styles.cell_00} onPress={()=>markPosition(0)}>
          {markers[0] === 'X' && <Image source={require('../assets/images/cross.png')} style={styles.icon} />}
          {markers[0] === 'O' && <Image source={require('../assets/images/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Cell 01 */}
        <Pressable style={styles.cell_01} onPress={()=>markPosition(1)}>
          {markers[1] === 'X' && <Image source={require('../assets/images/cross.png')} style={styles.icon} />}
          {markers[1] === 'O' && <Image source={require('../assets/images/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Cell 02 */}
        <Pressable style={styles.cell_02} onPress={()=>markPosition(2)}>
          {markers[2] === 'X' && <Image source={require('../assets/images/cross.png')} style={styles.icon} />}
          {markers[2] === 'O' && <Image source={require('../assets/images/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Cell 10 */}
        <Pressable style={styles.cell_10} onPress={()=>markPosition(3)}>
          {markers[3] === 'X' && <Image source={require('../assets/images/cross.png')} style={styles.icon} />}
          {markers[3] === 'O' && <Image source={require('../assets/images/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Cell 11*/}
        <Pressable style={styles.cell_11} onPress={()=>markPosition(4)}>
          {markers[4] === 'X' && <Image source={require('../assets/images/cross.png')} style={styles.icon} />}
          {markers[4] === 'O' && <Image source={require('../assets/images/zero.png')} style={styles.icon} />}
        </Pressable>

        {/*Cell 12 */}
        <Pressable style={styles.cell_12} onPress={()=>markPosition(5)}>
          {markers[5] === 'X' && <Image source={require('../assets/images/cross.png')} style={styles.icon} />}
          {markers[5] === 'O' && <Image source={require('../assets/images/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Cell 20*/}
        <Pressable style={styles.cell_20} onPress={()=>markPosition(6)}>
          {markers[6] === 'X' && <Image source={require('../assets/images/cross.png')} style={styles.icon} />}
          {markers[6] === 'O' && <Image source={require('../assets/images/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Cell 21 */}
        <Pressable style={styles.cell_21} onPress={()=>markPosition(7)}>
          {markers[7] === 'X' && <Image source={require('../assets/images/cross.png')} style={styles.icon} />}
          {markers[7] === 'O' && <Image source={require('../assets/images/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Cell 22 */}
        <Pressable style={styles.cell_22} onPress={()=>markPosition(8)}>
          {markers[8] === 'X' && <Image source={require('../assets/images/cross.png')} style={styles.icon} />}
          {markers[8] === 'O' && <Image source={require('../assets/images/zero.png')} style={styles.icon} />}
        </Pressable>
      </View>
      <Pressable style={styles.cancelBTN} onPress={resetMarkers}>
        <Image source={require('../assets/images/replay.png')} style={styles.cancelIcon}/>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;


