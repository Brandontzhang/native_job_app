import { useState }from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
       {isLoading ? <ActivityIndicator size="large" colors={COLORS.primary} /> :
          error ? <Text>An error occured</Text> :
          <FlatList 
              data={[1,2,3,4]}
              renderItem={(job) => (
                <PopularJobCard job={job}/>
              )}
              keyExtractor={job => job?.job_id}
              contentContainerStyle={{columnGap: SIZES.medium}}
              horizontal
          />
        } 
      </View>
    </View>
  )
}

export default Popularjobs
