
function dropview() {
    if (toggle) {
        return (
            <Modal
                visible={toggle}
                animationType='slide'
                transparent={true}

            >
                <View style={{ flexDirection: 'column', backgroundColor: 'rgba(240,240,240,0.5)', borderTopColor: '#E6E6E6', width: '100%', height: '100%', }}>
                    <View>
                        <View>
                            <TouchableOpacity style={styles.modalsearchbox} onPress={() => {
                                if (toggle) { settoggle(false) }
                                else { settoggle(true) }

                            }} >
                                <Text style={{ padding: 15, fontSize: 14 }}>{Tag}
                                </Text>
                                <Text style={{ fontSize: 25, marginLeft: 200, marginTop: 5, }} >+</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginTop: 0 }}>
                            <TouchableOpacity onPress={() => {
                                setTag("Male")
                                settoggle(false)
                                setdropstatus(true)
                            }}><Text style={styles.insidedropdown}>Male</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setTag("Female")
                                settoggle(false)
                                setdropstatus(true)
                            }}><Text style={styles.insidedropdown}>Female</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setTag("Other")
                                settoggle(false)
                                setdropstatus(true)
                            }}><Text style={styles.insidedropdown}>Other</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>



        );
    }

}

