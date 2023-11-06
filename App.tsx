import { StyleSheet, StatusBar } from "react-native";
import WebView from "react-native-webview";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	return (
		<SafeAreaProvider style={styles.container}>
			<StatusBar backgroundColor={"#7ED957"} />
			<WebView
				source={{ uri: "https://foodiezy.netlify.app/" }}
				style={styles.container}
			/>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({ container: { flex: 1 } });
