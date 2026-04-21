import mongoose from "mongoose";
import envConfig from "./dotenv.js";
import bcrypt from "bcrypt";
import Admin from "../models/admin.model.js";

const db = async () => {
    try {
        // Reduced serverSelectionTimeoutMS so we fail fast and avoid 10s buffer timeouts later
        await mongoose.connect(envConfig.MONGODB_URL, {
            serverSelectionTimeoutMS: 5000 
        });
        console.log('✅ Connected to MongoDB Successfully!');

        // --- Permanent Admin Setup ---
        const adminEmail = 'admin@gmail.com';
        const existingAdmin = await Admin.findOne({ email: adminEmail });
        
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin@123', 10);
            await Admin.create({
                name: 'admin',
                email: adminEmail,
                password: hashedPassword,
                role: 'admin'
            });
            console.log(`✅ Permanent Admin Created: ${adminEmail}`);
        } else {
            console.log(`✅ Permanent Admin already exists: ${adminEmail}`);
        }
        // -----------------------------

    } catch (error) {
        console.error('\n❌ CRITICAL: Error connecting to MongoDB Atlas!');
        if (error.name === 'MongooseServerSelectionError') {
             console.error("   Reason: Your IP address is NOT whitelisted on MongoDB Atlas.");
             console.error("   👉 FIX: Go to https://cloud.mongodb.com -> Security -> Network Access -> Add IP Address -> Click 'Allow Access from Anywhere' (0.0.0.0/0)");
             console.error("   Then wait 2 minutes and restart this server.");
        } else {
             console.error('   Details:', error.message);
        }
        
        // Stop node server entirely if DB fails, to prevent those 'buffering timed out' errors
        process.exit(1); 
    }
}

export default db();