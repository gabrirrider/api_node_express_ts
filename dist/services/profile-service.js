var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Profile from "../models/profile-model.js";
export class ProfileService {
    createProfile(firstName, lastName, profession, balance, type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield Profile.create({ firstName, lastName, profession, balance, type });
                return profile;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`unable to create profile: ${error.message}`);
                }
                else {
                    throw new Error('an unknow erro ocurred.');
                }
            }
        });
    }
    getAllProfiles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Profile.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`unable to fetch profile: ${error.message}`);
                }
                else {
                    throw new Error('an unknow erro ocurred.');
                }
            }
        });
    }
    getProfileBalance(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield Profile.findByPk(profileId);
                if (!profile) {
                    throw new Error('Profile not found');
                }
                return profile.balance;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`failed to retrieve profile balance: ${error.message}`);
                }
                else {
                    throw new Error('an unknow erro ocurred.');
                }
            }
        });
    }
    updateBalance(profileId, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (amount < 0) {
                    throw new Error("Deposit amount must be positive.");
                }
                const profile = yield Profile.findByPk(profileId);
                if (!profile) {
                    throw new Error(`Profile with ID ${profileId} not found.`);
                }
                profile.balance += amount;
                yield profile.save();
                return profile;
            }
            catch (error) {
                throw new Error(`Failed to update balance: ${error}`);
            }
        });
    }
}
