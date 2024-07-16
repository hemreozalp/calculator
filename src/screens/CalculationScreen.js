import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';

const CalculationScreen = () => {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isSecondNumber, setIsSecondNumber] = useState(false);

  const handleNumberPress = (number) => {
    if (isSecondNumber) {
      setSecondNumber((prev) => (prev ? prev + number : number));
      setDisplay((prev) => (prev === '0' ? number : prev + number));
    } else {
      setFirstNumber((prev) => (prev ? prev + number : number));
      setDisplay((prev) => (prev === '0' ? number : prev + number));
    }
  };

  const handleOperatorPress = (op) => {
    if (firstNumber && !secondNumber) {
      setOperator(op);
      setIsSecondNumber(true);
      setDisplay(op);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstNumber(null);
    setSecondNumber(null);
    setOperator(null);
    setIsSecondNumber(false);
  };

  const handlePlusMinus = () => {
    if (isSecondNumber && secondNumber) {
      setSecondNumber((prev) => String(-parseFloat(prev)));
      setDisplay((prev) => String(-parseFloat(prev)));
    } else if (firstNumber) {
      setFirstNumber((prev) => String(-parseFloat(prev)));
      setDisplay((prev) => String(-parseFloat(prev)));
    }
  };

  const handlePercent = () => {
    if (isSecondNumber && secondNumber) {
      setSecondNumber((prev) => String(parseFloat(prev) / 100));
      setDisplay((prev) => String(parseFloat(prev) / 100));
    } else if (firstNumber) {
      setFirstNumber((prev) => String(parseFloat(prev) / 100));
      setDisplay((prev) => String(parseFloat(prev) / 100));
    }
  };

  const handleEqualPress = () => {
    if (firstNumber && secondNumber && operator) {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(firstNumber) + parseFloat(secondNumber);
          break;
        case '-':
          result = parseFloat(firstNumber) - parseFloat(secondNumber);
          break;
        case 'x':
          result = parseFloat(firstNumber) * parseFloat(secondNumber);
          break;
        case '/':
          result = parseFloat(firstNumber) / parseFloat(secondNumber);
          break;
        default:
          return;
      }
      setDisplay(String(result));
      setFirstNumber(String(result));
      setSecondNumber(null);
      setOperator(null);
      setIsSecondNumber(false);
    }
  };

  const handleDecimalPress = () => {
    if (isSecondNumber) {
      if (!secondNumber.includes('.')) {
        setSecondNumber((prev) => prev + '.');
        setDisplay((prev) => prev + '.');
      }
    } else {
      if (!firstNumber.includes('.')) {
        setFirstNumber((prev) => prev + '.');
        setDisplay((prev) => prev + '.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calcScreen}>
        <Text style={styles.calcText}>{display}</Text>
      </View>
      <View style={styles.buttonScreen}>
        <CustomButton text="AC" color="lightgray" onPress={handleClear} />
        <CustomButton text="+/-" color="lightgray" onPress={handlePlusMinus} />
        <CustomButton text="%" color="lightgray" onPress={handlePercent} />
        <CustomButton text="/" color="orange" onPress={() => handleOperatorPress('/')} />
        <CustomButton text="7" color="gray" onPress={() => handleNumberPress('7')} />
        <CustomButton text="8" color="gray" onPress={() => handleNumberPress('8')} />
        <CustomButton text="9" color="gray" onPress={() => handleNumberPress('9')} />
        <CustomButton text="x" color="orange" onPress={() => handleOperatorPress('x')} />
        <CustomButton text="4" color="gray" onPress={() => handleNumberPress('4')} />
        <CustomButton text="5" color="gray" onPress={() => handleNumberPress('5')} />
        <CustomButton text="6" color="gray" onPress={() => handleNumberPress('6')} />
        <CustomButton text="-" color="orange" onPress={() => handleOperatorPress('-')} />
        <CustomButton text="1" color="gray" onPress={() => handleNumberPress('1')} />
        <CustomButton text="2" color="gray" onPress={() => handleNumberPress('2')} />
        <CustomButton text="3" color="gray" onPress={() => handleNumberPress('3')} />
        <CustomButton text="+" color="orange" onPress={() => handleOperatorPress('+')} />
        <View style={styles.lastRowOfButton}>
          <CustomButton style={styles.doubleSizeButton} text="0" color="gray" onPress={() => handleNumberPress('0')} />
          <CustomButton text="," color="gray" onPress={handleDecimalPress} />
          <CustomButton text="=" color="orange" onPress={handleEqualPress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalculationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#27292E',
  },
  calcScreen: {
    flex: 2,
    width: '100%',
    backgroundColor: '#27292E',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  calcText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#F5F5F5',
    paddingBottom: 12,
  },
  buttonScreen: {
    flex: 4,
    width: '100%',
    backgroundColor: '#637381',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 50,
  },
  lastRowOfButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  doubleSizeButton: {
    width: '43%', 
    aspectRatio: 2, 
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 25,
  },
});
